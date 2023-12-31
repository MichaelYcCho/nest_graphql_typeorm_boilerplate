import { Field, ObjectType, PickType } from '@nestjs/graphql'
import { User } from '@users/entities/user.entity'
import { IsNumber, IsString } from 'class-validator'

@ObjectType()
export class UserResponseDto extends PickType(User, ['createdAt', 'updatedAt'] as const) {
    @IsNumber()
    @Field((type) => Number)
    id: number

    @IsString()
    @Field((type) => String)
    userName: string

    @IsString()
    @Field((type) => String)
    profileName: string
}
