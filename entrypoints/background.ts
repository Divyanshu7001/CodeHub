import { runTimeFetcher } from "./background/runtime-id-passer";

export default defineBackground(() => {
  runTimeFetcher();
});
