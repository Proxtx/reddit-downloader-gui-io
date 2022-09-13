import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";
import config from "@proxtx/config";

const statsApi = await genCombine(
  config.RedditDownloader.api + "/",
  "public/stats.js",
  genModule
);

export class Info {
  name = "Downloader";

  async info() {
    let stats = await statsApi.getAllStats(config.RedditDownloader.pwd);
    let returnObj = [];
    for (let name in stats) {
      returnObj.push({
        element: "title-box-io",
        title: name,
        contains: {
          element: "text-io",
          size: "90%",
          color: "var(--greyColor)",
          text: stats[name],
        },
      });
    }

    return returnObj;
  }
}
