import { pogo } from "./deps.ts";

export type Link = {
  type: string;
  rel?: string;
  href?: string;
};

export type Webfinger = {
  subject: string;
  links: Link[];
};

export type Actor = {
  n: number;
};

export async function webfingerHandler(
  request: pogo.Request,
  h: pogo.Toolkit
): Promise<Webfinger> {
  // todo: look at the query params and make sure they're even looking for this
  return {
    subject: "acct:jessechounard@tobefair.click",
    links: [
      {
        rel: "self",
        type: "application/activity+json",
        href: "https://tobefair.click/actors/jessechounard",
      },
    ],
  };
}

export async function actorRequest(
  request: pogo.Request,
  h: pogo.Toolkit
): Promise<object> {
  return {
    "@context": [
      "https://www.w3.org/ns/activitystreams",
      "https://w3id.org/security/v1",
    ],

    id: "https://tobefair.click/actors/jessechounard",
    type: "Person",
    preferredUsername: "jessechounard",
    inbox: "https://tobefair.click/inbox",
    icon: {
      type: "Image",
      mediaType: "image/jpg",
      url: "https://media.hachyderm.io/accounts/avatars/109/354/505/112/302/472/original/9a34caf445e43562.jpeg",
    },

    publicKey: {
      id: "https://tobefair.click/actors/jessechounard#main-key",
      owner: "https://tobefair.click/actors/jessechounard",
      publicKeyPem: "-----BEGIN PUBLIC KEY-----...-----END PUBLIC KEY-----",
    },
  };
}
