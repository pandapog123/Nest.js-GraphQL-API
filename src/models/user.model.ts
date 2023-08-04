import { Field, ObjectType } from '@nestjs/graphql';

import data from '../data';
import { Todo } from './todo.model';

data.users;
@ObjectType()
export class User {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  birthday: string;

  @Field((type) => String)
  email: string;

  @Field((type) => [Todo])
  todos: Todo[];
}
