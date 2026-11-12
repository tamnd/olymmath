---
tag: RETBS931W5
kind: problem
type: answer
answer: "0.087"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lucky Spy (from 9th grade, 2 points). A spy with a radio transmitter parachutes into a completely random point in a perfectly square forest measuring $10 \times 10$ km. Upon landing, he immediately starts a radio transmission, revealing important information to the enemy.

At each of the four corners of the forest, there are radio direction finders, each capable of detecting the transmitter's operation within a 10 km radius. To accurately determine the coordinates of the operating transmitter, the transmitter must be detected by at least two direction finders.

The spy is lucky: one of the radio direction finders is not working today. What is the probability that the counterintelligence will not be able to determine the coordinates of the location where the spy landed?
