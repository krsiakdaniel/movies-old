import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'

import moviesDataFile from '../../data/cinema100movies.json'

export const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>
          {t('about.title')} | {t('shared.app.title')}
        </title>
      </Helmet>
      <Box>
        <Heading>{t('about.title')}</Heading>
        <Text>
          {t('about.text1')} <strong>{t('shared.app.author')}</strong>{' '}
          {t('about.text2')}
        </Text>
      </Box>

      <Table size="sm" variant="striped" colorScheme="green">
        <TableCaption placement="top">
          100 movies watched in cinema in 10 years
        </TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>title</Th>
            <Th>time</Th>
            <Th>genre</Th>
            <Th>director</Th>
            <Th>actor</Th>
            <Th>imdb</Th>
            <Th>imdbId</Th>
            <Th>minutes</Th>
            <Th>year</Th>
            <Th>month</Th>
            <Th>monthNumber</Th>
            <Th>day</Th>
            <Th>dayNumber</Th>
            <Th>rating</Th>
            <Th>price</Th>
            <Th>row</Th>
            <Th>seat</Th>
            <Th>hall</Th>
            <Th>cinema</Th>
            <Th>person</Th>
          </Tr>
        </Thead>

        <Tbody>
          {moviesDataFile.map((m) => {
            return (
              <Tr key={m.id}>
                <Td isNumeric>{m.id}</Td>
                <Td>{m.title}</Td>
                <Td isNumeric>{m.time}</Td>
                <Td>{m.genre}</Td>
                <Td>{m.director}</Td>
                <Td>{m.actor}</Td>
                <Td>{m.imdb}</Td>
                <Td isNumeric>{m.imdbId}</Td>
                <Td isNumeric>{m.minutes}</Td>
                <Td isNumeric>{m.year}</Td>
                <Td>{m.month}</Td>
                <Td isNumeric>{m.monthNumber}</Td>
                <Td>{m.day}</Td>
                <Td isNumeric>{m.dayNumber}</Td>
                <Td isNumeric>{m.rating}</Td>
                <Td isNumeric>{m.price}</Td>
                <Td>{m.row}</Td>
                <Td isNumeric>{m.seat}</Td>
                <Td isNumeric>{m.hall}</Td>
                <Td>{m.cinema}</Td>
                <Td>{m.person}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}
