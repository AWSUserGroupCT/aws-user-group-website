import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Typography, CardContent, Card } from "@mui/material";

interface Film {
  title: string;
  director: string;
  openingCrawl: string;
  vehicleConnection: {
    vehicles: Vehicle[];
  };
}

interface Vehicle {
  model: string;
  name: string;
  consumables: string;
}

const MeetupGetEvents = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new ApolloClient({
          uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
          cache: new InMemoryCache(),
        });

        const response = await client.query({
          query: gql`
            {
              allFilms {
                films {
                  title
                  director
                  openingCrawl

                }
              }
            }
          `,
        });

        const filmsData = response.data.allFilms.films;
        setFilms(filmsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {films.map((film, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {film?.title}
            </Typography>
            <Typography color="textSecondary">
              Director: {film?.director}
            </Typography>
            <Typography color="textSecondary">
              Opening Crawl: {film?.openingCrawl}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MeetupGetEvents;
