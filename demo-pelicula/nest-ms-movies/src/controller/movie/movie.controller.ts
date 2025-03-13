import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
  Post,
} from '@nestjs/common';
import { Movies } from 'src/models/movies.model';
import { MovieService } from 'src/services/movie/movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  get() {
    return this.movieService
      .findAll()
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post()
  save(@Body() movie: Movies) {
    return this.movieService
      .create(movie)
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post('/update')
  update(@Body() movie: Movies) {
    return this.movieService
      .update(movie)
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Get('/delete/:id')
  delete(@Param('id') id: number) {
    return this.movieService
      .delete(id)
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
