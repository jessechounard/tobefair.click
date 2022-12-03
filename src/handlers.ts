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
  console.log(request.url);

  // todo: look at the query params and make sure they're even looking for this
  return {
    subject: "acct:jessechounard@tobefair.click",
    links: [
      {
        rel: "http://webfinger.net/rel/profile-page",
        type: "text/html",
        href: "https://jessechounard.dev/",
      },
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
  console.log(request.url);

  return {
    "@context": [
      "https://www.w3.org/ns/activitystreams",
      "https://w3id.org/security/v1",
    ],

    id: "https://tobefair.click/actors/jessechounard",
    type: "Person",
    preferredUsername: "jessechounard",
    inbox: "https://tobefair.click/inbox",

    publicKey: {
      id: "https://tobefair.click/actors/jessechounard#main-key",
      owner: "https://tobefair.click/actors/jessechounard",
      publicKeyPem: "-----BEGIN PUBLIC KEY-----...-----END PUBLIC KEY-----",
    },
  };
}
