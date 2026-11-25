// Till Firmware Do Us Part — rebuild #3, 133 chars, one sentence.
// Servos drop the ring three times; she says yes before the sensors find it.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const TEXT = "I vow to love you even though my servos dropped the ring three times, and you still said yes before my sensors found it on the floor.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
