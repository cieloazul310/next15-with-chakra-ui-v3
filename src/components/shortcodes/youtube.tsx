import { AspectRatio, Text } from "@chakra-ui/react";

function videoIdToEmbed(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

function parseYouTube(source: string | URL) {
  try {
    const url = new URL(source);
    const params = url.searchParams;
    const videoId = params.get("v");
    if (!videoId) return null;

    return videoIdToEmbed(videoId);
  } catch {
    return videoIdToEmbed(source.toString());
  }
}

export type YouTubeProps = { src: string | URL; title?: string };

export function YouTube({ src, title }: YouTubeProps) {
  const video = parseYouTube(src);
  if (!video) {
    return <Text color="fg.error">Invalid video source.</Text>;
  }

  return (
    <AspectRatio
      maxWidth="lg"
      my="lg"
      rounded="lg"
      ratio={{ base: 1, sm: 16 / 9 }}
      overflow="hidden"
    >
      <iframe title={title ?? src.toString()} src={video} allowFullScreen />
    </AspectRatio>
  );
}
