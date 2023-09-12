/*!
 * Copyright (c) 2023 Dogwood Logic, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    secureld: 'urn:secureld#',
    Instance: 'secureld:Instance',
    NonPersonEntity: 'secureld:NonPersonEntity',
    ServiceInstanceCredential: 'secureld:ServiceInstanceCredential',
    SoftwareApplication: 'secureld:SoftwareApplication',
    controller: {
      '@id': 'secureld:controller'
    },
    name: 'https://schema.org/name',
    description: 'https://schema.org/description',
    url: 'https://schema.org/url',
    service: {
      '@id': 'secureld:service',
      '@type': '@id'
    }
  }
};
