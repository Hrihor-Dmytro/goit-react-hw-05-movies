import * as API from '../Services/Api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FormElement,
  FormField,
  Button,
  InfoHeader,
  MainBox,
} from './Movies.styled';
import { Formik } from 'formik';
import { MovieList } from './MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userQuery = searchParams.get('query');
    if (userQuery) {
      loadingFilms(userQuery);
    }
  }, [searchParams]);

  const loadingFilms = async value => {
    if (value === '') {
      return;
    }
    try {
      const response = await API.getMovieByQuery(value);
      setMovies(response);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    actions.setSubmitting(false);

    if (values.searchQuery === '') {
      return;
    }
    setSearchParams({ query: values.searchQuery });
    loadingFilms(values.searchQuery);
  };

  return (
    <MainBox>
      <h1>Movies</h1>
      <Formik
        initialValues={{ searchQuery: searchParams.get('query') || '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormElement>
            <FormField
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
            />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
          </FormElement>
        )}
      </Formik>
      {movies.lenght === 0 && searchParams.get('query') && isLoading && (
        <InfoHeader>'Nothing found =( '</InfoHeader>
      )}
      <MovieList films={movies} />
    </MainBox>
  );
};
