/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "AirtableSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Auth": {
      "publicKey": string
      "type": "sst.aws.Auth"
    }
    "AuthAuthenticator": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "AuthFingerprintKey": {
      "type": "random.index/randomString.RandomString"
      "value": string
    }
    "AuthKeypair": {
      "private": string
      "public": string
      "type": "tls.index/privateKey.PrivateKey"
    }
    "AuthWorker": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
    "Bus": {
      "arn": string
      "name": string
      "type": "sst.aws.Bus"
    }
    "Database": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.sst.Linkable"
      "username": string
    }
    "Email": {
      "sender": string
      "type": "sst.aws.Email"
    }
    "EmailOctopusSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Interval": {
      "type": "sst.aws.Service"
    }
    "IntervalBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "IntervalKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "OpenApi": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "OpenApiWorker": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
    "SSH": {
      "type": "sst.aws.Service"
    }
    "SSHKey": {
      "private": string
      "public": string
      "type": "tls.index/privateKey.PrivateKey"
    }
    "ShippoSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ShortDomainEmail": {
      "sender": string
      "type": "sst.aws.Email"
    }
    "Site": {
      "type": "sst.aws.Astro"
      "url": string
    }
    "StripePublic": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "StripeSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "StripeWebhook": {
      "id": string
      "secret": string
      "type": "stripe.index/webhookEndpoint.WebhookEndpoint"
    }
  }
}
export {}
