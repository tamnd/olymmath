---
tag: QKSETPBYB8
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From two settlements $A$ and $B$, two tourists set out towards each other at the same time. Upon meeting, it turns out that the tourist who left from $A$ has walked 2 km more than the second tourist. Continuing their movement at the same speed, the first tourist arrives in $B$ after 1 hour 36 minutes, and the second tourist arrives in $A$ after 2 hours 30 minutes after the meeting. Find the distance $A B$ and the speed of each tourist.

$\mathrm{Pe}$ she n ie. Let the first tourist (who left from $A$) have walked $s$ kilometers by the time they met, then the second tourist walked $(s-2)$ kilometers by the time they met. Since after the meeting, the first tourist walked $(s-2)$ kilometers in 1.6 hours, his speed is $\frac{s-2}{96}$ kilometers per minute, and the speed of the second tourist is $\frac{s}{150}$ kilometers per minute. Since before the meeting, the tourists walked the same amount of time, we have the equation

$$
s: \frac{s-2}{96}=(s-2): \frac{s}{150}, \text { i.e. } 9 s^{2}-100 s+100=0
$$

from which $s_{1}=10$ (km), $s_{2}=\frac{10}{9}$ (km). The condition of the problem $(s>2)$ is satisfied only by the first root.

Thus, the distance $A B$ is 18 km $(10+(10-2))$, the speed of the first tourist is $-\frac{8}{96}=\frac{1}{12}$ km/min, or 5 km/h, and the speed of the second tourist is $-\frac{10}{150}=\frac{1}{15}$ km/min, or 4 km/h.
