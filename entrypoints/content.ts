import { hostExtractor } from "./content/host-extractor";

export default defineContentScript({
  matches: ['*://*/*'],
  main() {
    hostExtractor();
  },
});
