import { useState } from "react";
import { data } from "../../data/data";

function TweetsList() {
  const [tweets, setTweets] = useState(data);

  return (
    <div>
      <h2>TweetsList</h2>
      <section>
        {tweets.map((t) => (
          <div key={t.id}>{t.content}</div>
        ))}
      </section>
    </div>
  );
}

export default TweetsList;
