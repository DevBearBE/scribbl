import { defineHandler } from "nitro";
import { auth } from "../../utils/auth";

export default defineHandler((event) => auth.handler(event.req));
