import { Box, Grid, Group, Text } from "@mantine/core";
import { generateSxStyles, theme } from "../../../styles/theme.config";
import { Wish } from "../atoms";

interface Props {
  countdownData: any;
  name: string;
}

const Countdown: React.FC<Props> = ({ countdownData, name }: Props) => {
  return (
    <Group spacing="xs" sx={styles.container}>
      <Box sx={styles.item}>
        <Text weight={700} size="xl">
          {countdownData.days}
        </Text>
        <Text size="sm">Days</Text>
      </Box>
      <Box sx={styles.item}>
        <Text weight={700} size="xl">
          {countdownData.hours}
        </Text>
        <Text size="sm">Hours</Text>
      </Box>
      <Box sx={styles.item}>
        <Text weight={700} size="xl">
          {countdownData.minutes}
        </Text>
        <Text size="sm">Minutes</Text>
      </Box>
      <Box sx={styles.item}>
        <Text weight={700} size="xl">
          {countdownData.seconds}
        </Text>
        <Text size="sm">Seconds</Text>
      </Box>
    </Group>
  );
};
export default Countdown;

const styles = generateSxStyles({
  container: {},
  item: {
    background: "#FFFFFF99",
    width: 80,
    height: 80,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [`@media (max-width: ${theme.breakpoints?.md}px)`]: {
      width: 65,
      height: 80,
    },
  },
});
