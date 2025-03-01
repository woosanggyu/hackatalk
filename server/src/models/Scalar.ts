/* eslint-disable no-shadow */
import {asNexusMethod, scalarType} from 'nexus';

import {GraphQLDate} from 'graphql-iso-date';
import {GraphQLUpload} from 'apollo-server-express';

export enum AuthType {
  email = 'email',
  facebook = 'facebook',
  google = 'google',
  apple = 'apple',
}

export const Auth = scalarType({
  name: 'Auth',
  asNexusMethod: 'auth',
  parseValue(value: AuthType): AuthType | undefined {
    if (AuthType[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export enum Gender {
  male = 'male',
  female = 'female',
}

export const gender = scalarType({
  name: 'Gender',
  asNexusMethod: 'gender',
  parseValue(value: Gender): Gender | undefined {
    if (Gender[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export enum MembershipType {
  owner = 'owner',
  admin = 'admin',
  member = 'member',
}

export const membershipType = scalarType({
  name: 'MembershipType',
  asNexusMethod: 'membershipType',
  parseValue(value: MembershipType): MembershipType | undefined {
    if (MembershipType[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export enum AlertMode {
  sound = 'sound',
  vibrate = 'vibrate',
  silent = 'silent',
}

export const alertMode = scalarType({
  name: 'AlertMode',
  asNexusMethod: 'alertMode',
  parseValue(value: AlertMode): AlertMode | undefined {
    if (AlertMode[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export enum ChannelType {
  private = 'private',
  public = 'public',
  self = 'self',
}

export const channelType = scalarType({
  name: 'ChannelType',
  asNexusMethod: 'channelType',
  parseValue(value: ChannelType): ChannelType | undefined {
    if (ChannelType[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export enum MessageType {
  text = 'text',
  photo = 'photo',
  file = 'file',
}

export const messageType = scalarType({
  name: 'MessageType',
  asNexusMethod: 'messageType',
  parseValue(value: MessageType): MessageType | undefined {
    if (MessageType[value]) return value;
  },
  serialize(value) {
    return value;
  },
});

export const Upload = GraphQLUpload;
export const DateTime = GraphQLDate;
export const GQLDate = asNexusMethod(GraphQLDate, 'date');
