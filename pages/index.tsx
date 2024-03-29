import {
  ActionIcon,
  Box,
  Button,
  Center,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { Icon, NextImage } from "../src/components/atoms";
import { generateSxStyles, theme } from "../styles/theme.config";
import {
  DeviceSpeaker,
  DeviceSpeakerOff,
  Map,
  PlayerPause,
  PlayerPlay,
} from "tabler-icons-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import { Countdown } from "../src/components/molecules";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(true);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  const day = 24;
  const month = 9;

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Birthday in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let weddingDay = new Date(currentYear, month - 1, day);
        if (dateAtm > weddingDay) {
          weddingDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === weddingDay.getFullYear() + 1) {
          weddingDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const birthdayTime = weddingDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  const mobile = useMediaQuery(
    `(max-width: ${theme.breakpoints?.md}px)`,
    false
  );

  const openInvitation = () => {
    setOpen(true);
    setPlay(true);
    setMuted(false);
  };

  const photos: Photo[] = [
    {
      src: "/images/gallery_01.jpg",
      width: 1024,
      height: 768,
    },
    {
      src: "/images/gallery_02.jpg",
      width: 1024,
      height: 768,
    },
    {
      src: "/images/gallery_03.jpg",
      width: 1024,
      height: 768,
    },
    {
      src: "/images/gallery_04.jpg",
      width: 1024,
      height: 768,
    },
    {
      src: "/images/gallery_05.jpg",
      width: 1024,
      height: 768,
    },
    {
      src: "/images/gallery_06.jpg",
      width: 576,
      height: 1024,
    },
    {
      src: "/images/gallery_07.jpg",
      width: 576,
      height: 1024,
    },
    {
      src: "/images/gallery_08.jpg",
      width: 576,
      height: 1024,
    },
    {
      src: "/images/gallery_09.jpg",
      width: 576,
      height: 1024,
    },
    {
      src: "/images/gallery_10.jpg",
      width: 576,
      height: 1024,
    },
    {
      src: "/images/gallery_11.jpg",
      width: 1024,
      height: 576,
    },
    {
      src: "/images/gallery_12.jpg",
      width: 1024,
      height: 576,
    },
  ];

  const [index, setIndex] = useState(-1);
  const slides = photos.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <>
      <Head>
        <title>Wedding of Ririn Yoga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={styles.container}>
        <Box sx={styles.hero}>
          <Box sx={styles.heroContent}>
            <Title
              order={mobile ? 2 : 1}
              sx={{ marginBottom: 28, color: theme.colors?.title }}
            >
              Ririn & Yoga
            </Title>
            <Text color="textDark" size={mobile ? "sm" : "md"}>
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang.
            </Text>
            <Text color="textDark" weight={700} size={mobile ? "sm" : "md"}>
              Surah Ar Rum Ayat 21
            </Text>
          </Box>
          <Box sx={styles.heroAwan}>
            <Icon.Awan />
          </Box>
          <Box sx={styles.heroSiluet}>
            <Icon.GedungSiluet />
          </Box>
          <Box sx={styles.heroAspal}>
            <Icon.Aspal />
          </Box>
          <Box sx={styles.heroPlane}>
            <Icon.Plane />
          </Box>
          <Box sx={styles.heroCharacter}>
            <Icon.Character />
          </Box>
          {open && (
            <Box sx={styles.heroCountdown}>
              <Countdown countdownData={state} name="Ririn and Yoga" />
            </Box>
          )}
        </Box>
        {!open && (
          <Box sx={styles.cover}>
            <Box sx={styles.coverContent}>
              {name && (
                <Box sx={styles.coverLabel}>
                  <Text size={mobile ? "sm" : "md"}>
                    Kepada Yth Bpk/Ibu/Sdr/i:
                  </Text>
                  <Text size={mobile ? "lg" : "xl"} color="title" weight={700}>
                    {(name as string).replace(/([A-Z])/g, " $1").trim()}
                  </Text>
                  <Text size={mobile ? "sm" : "md"}>di tempat</Text>
                </Box>
              )}
              <Button radius="xl" onClick={openInvitation}>
                BUKA UNDANGAN
              </Button>
            </Box>
          </Box>
        )}
        {open && (
          <>
            <Box sx={styles.main}>
              <Box sx={styles.mainAwan}>
                <Icon.AwanSection />
              </Box>
              <Box sx={styles.mainContent}>
                <Box sx={styles.mainBismillah}>
                  <Icon.Bismillah />
                </Box>
                <Text size={mobile ? "xs" : "md"} sx={styles.mainTextOpening}>
                  Maha suci Allah SWT yang telah menciptakan makhluk-Nya
                  berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai
                  kasih sayang yang Kau ciptakan di antara putra-putri kami:
                </Text>
                <Box sx={styles.mainPhoto}>
                  <Icon.PhotoRirin />
                </Box>
                <Title order={mobile ? 3 : 2} sx={styles.mainTitle}>
                  Ririn Isnawati, S.T
                </Title>
                <Text size={mobile ? "sm" : "md"}>
                  Putri Bapak Sutarjo dan Ibu Rukmini
                </Text>
                <Text size={mobile ? "sm" : "md"}>
                  Blali RT 005, Seloharjo, Pundong, Bantul, Yogyakarta
                </Text>
                <Box sx={styles.mainLove}>
                  <Icon.Love />
                </Box>
                <Box sx={styles.mainPhoto}>
                  <Icon.PhotoYoga />
                </Box>
                <Title order={mobile ? 3 : 2} sx={styles.mainTitle}>
                  Yoga Chariansya Pratama, S.T
                </Title>
                <Text size={mobile ? "sm" : "md"}>
                  Putra Bapak Imam Chamdani dan Ibu Isriani
                </Text>
                <Text size={mobile ? "sm" : "md"}>
                  Tanah Merah B, Perbaungan, Serdang Bedagai, Sumatra Utara
                </Text>
                <Grid justify="center" sx={styles.mainEvent}>
                  <Grid.Col sx={styles.mainEventItem}>
                    <Text
                      size="xl"
                      sx={{ marginBottom: 4, color: theme.colors?.title }}
                    >
                      <strong>AKAD</strong> NIKAH
                    </Text>
                    <Text size={mobile ? "sm" : "md"}>
                      Ahad Legi, 24 Juli 2022
                    </Text>
                    <Text size={mobile ? "sm" : "md"}>08.00 WIB</Text>
                    <Text size={mobile ? "sm" : "md"}>Rumah Bapak Sutarjo</Text>
                  </Grid.Col>
                  <Grid.Col sx={styles.mainEventItem}>
                    <Text size="xl" color="title" mb={4}>
                      <strong>RESEPSI</strong> PERNIKAHAN
                    </Text>
                    <Text size={mobile ? "sm" : "md"}>
                      Sabtu, 24 September 2022
                    </Text>
                    <Text size={mobile ? "sm" : "md"}>
                      Rumah Bapak Imam Chamdani
                    </Text>
                  </Grid.Col>
                </Grid>
              </Box>
            </Box>
            <Box sx={styles.gallery}>
              <Box sx={styles.galleryAwan}>
                <Icon.AwanSection />
              </Box>
              <Box sx={styles.galleryContent}>
                <Title
                  mb={48}
                  sx={{ color: theme.colors?.title, fontWeight: 500 }}
                >
                  Album Foto
                </Title>
                <PhotoAlbum
                  layout="columns"
                  photos={photos}
                  renderPhoto={NextImage}
                  columns={mobile ? 3 : 4}
                  onClick={(_event, _photo, index) => setIndex(index)}
                />
                <Lightbox
                  slides={slides}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  // enable optional lightbox plugins
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                <Title
                  mt={100}
                  mb={48}
                  sx={{ color: theme.colors?.title, fontWeight: 500 }}
                >
                  Video Pernikahan
                </Title>
                <Center>
                  <ReactPlayer
                    url="https://youtu.be/xonyCOGALYs"
                    controls
                    onPlay={() => {
                      setPlay(false);
                      setMuted(true);
                    }}
                    onPause={() => {
                      setPlay(true);
                      setMuted(false);
                    }}
                    onEnded={() => {
                      setPlay(true);
                      setMuted(false);
                    }}
                  />
                </Center>
              </Box>
            </Box>
            <Box sx={styles.main}>
              <Box sx={styles.mainAwan}>
                <Icon.AwanSection />
              </Box>
              <Box sx={styles.mainContent}>
                <Title
                  mb={48}
                  sx={{ color: theme.colors?.title, fontWeight: 500 }}
                >
                  Covid-19
                </Title>
                <Text
                  size={mobile ? "sm" : "md"}
                  mx="auto"
                  sx={{ maxWidth: 600 }}
                >
                  Untuk menjaga acara pernikahan ini aman dari resiko penularan
                  Covid-19, mohon simak anjuran berikut sebelum anda hadir ke
                  lokasi:
                </Text>
                <Grid justify="center" sx={styles.info}>
                  <Grid.Col sx={styles.infoItem}>
                    <Image
                      src="/images/do.png"
                      alt=""
                      width={400}
                      height={175}
                      layout="responsive"
                    />
                  </Grid.Col>
                  <Grid.Col sx={styles.infoItem}>
                    <Image
                      src="/images/don't.png"
                      alt=""
                      width={400}
                      height={175}
                      layout="responsive"
                    />
                  </Grid.Col>
                </Grid>
              </Box>
            </Box>
            <Box sx={styles.footer}>
              <Image
                src="/images/footer.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box sx={styles.control}>
              <ActionIcon onClick={() => setPlay(!play)}>
                {play ? <PlayerPause size={24} /> : <PlayerPlay size={24} />}
              </ActionIcon>
              <ActionIcon onClick={() => setMuted(!muted)}>
                {muted ? (
                  <DeviceSpeakerOff size={24} />
                ) : (
                  <DeviceSpeaker size={24} />
                )}
              </ActionIcon>
            </Box>
            <Box sx={styles.fab}>
              <Button
                component="a"
                href="https://www.google.com/maps/dir//3.570229,99.042136/@3.570229,99.042136,17z/data=!4m2!4m1!3e0"
                leftIcon={<Map size={14} />}
                radius="xl"
                size="md"
              >
                Petunjuk Arah
              </Button>
            </Box>
            <Box sx={{ display: "none" }}>
              <ReactPlayer
                muted={muted}
                playing={play}
                loop
                url="https://www.youtube.com/watch?v=1WCIrw85zbQ"
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;

//#region STYLES
const styles = generateSxStyles({
  container: {
    backgroundColor: theme.colors?.background,
    minHeight: "100vh",
    maxWidth: 1280,
    overflow: "hidden",
    margin: "auto",
    position: "relative",
  },
  hero: {
    position: "relative",
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    overflow: "hidden",
  },
  heroAspal: {
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors?.aspal,
    display: "flex",
    justifyContent: "center",
  },
  heroSiluet: {
    position: "absolute",
    bottom: 130,
    display: "flex",
    justifyContent: "center",
  },
  heroCharacter: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    height: 522,
    maxWidth: 1024,
    bottom: -50,
    right: 128,
    [`@media (max-width: ${theme.breakpoints?.md}px)`]: {
      height: "60vh",
      right: 0,
    },
  },
  heroPlane: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    bottom: 100,
  },
  heroAwan: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    bottom: 100,
  },
  heroContent: {
    maxWidth: 650,
    textAlign: "center",
    paddingTop: "10vh",
    paddingLeft: 24,
    paddingRight: 24,
    zIndex: 1,
  },
  heroCountdown: {
    position: "absolute",
    bottom: "20vh",
  },
  main: {
    minHeight: "100vh",
    position: "relative",
    background: theme.colors?.backgroundLight,
  },
  mainAwan: {
    height: 300,
    overflow: "hidden",
    position: "absolute",
    background: theme.colors?.background,
  },
  mainContent: {
    position: "relative",
    padding: 24,
    paddingTop: 300,
    paddingBottom: 16,
    textAlign: "center",
    width: "100%",
  },
  mainBismillah: {
    height: 28,
    marginBottom: 16,
  },
  mainTextOpening: {
    maxWidth: 600,
    margin: "auto",
    marginBottom: 32,
  },
  mainPhoto: {
    width: 128,
    margin: "auto",
    marginBottom: 16,
  },
  mainTitle: {
    marginBottom: 16,
    color: theme.colors?.title,
  },
  mainLove: {
    width: 60,
    margin: "auto",
    marginTop: 24,
    marginBottom: 24,
  },
  mainEvent: {
    paddingTop: 48,
    paddingBottom: 16,
  },
  mainEventItem: {
    padding: "24px 16px",
    borderRadius: 12,
    background: "#FFFFFF50",
    maxWidth: 300,
    margin: "48px auto",
  },
  control: {
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  fab: {
    position: "fixed",
    right: 24,
    bottom: 24,
  },
  cover: {
    position: "fixed",
    height: "100vh",
    width: "100%",
    zIndex: 1,
    top: 0,
    left: 0,
    background: "#00000050",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  coverLabel: {
    padding: 16,
    paddingBottom: 32,
    borderRadius: 8,
    background: "#FFFFFF",
    width: 300,
    textAlign: "center",
    marginBottom: -24,
    [`@media (min-width: ${theme.breakpoints?.md}px)`]: {
      width: "auto",
    },
  },
  coverContent: {
    marginBottom: "15vh",
    textAlign: "center",
  },
  gallery: {
    position: "relative",
  },
  galleryAwan: {
    height: 300,
    overflow: "hidden",
    position: "absolute",
    background: theme.colors?.background,
    transform: "rotate(180deg)",
  },
  galleryContent: {
    position: "relative",
    padding: 16,
    paddingTop: 300,
    textAlign: "center",
    maxWidth: 900,
    margin: "auto",
  },
  galleryItem: {
    borderRadius: 4,
    overflow: "hidden",
  },
  info: {
    marginTop: 24,
    marginBottom: 24,
  },
  infoItem: {
    maxWidth: 500,
  },
  footer: {
    position: "relative",
    height: 300,
    background: theme.colors?.backgroundLight,

    [`@media (max-width: ${theme.breakpoints?.md}px)`]: {
      height: 150,
    },
  },
});
//#endregion
