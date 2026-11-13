---
tag: V9M1ESB08V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463220
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5734
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2010
    source: hf-ai-mo-aops
    label: 2010 Stanford Mathematics Tournament
---
A straight line connects City A at $(0, 0)$ to City B, 300 meters away at $(300, 0)$ . At time $t=0$ , a bullet train instantaneously sets out from City A to City B while another bullet train simultaneously leaves from City B to City A going on the same train track. Both trains are traveling at a constant speed of $50$ meters/second.

Also, at $t=0$ , a super
y stationed at $(150, 0)$ and restricted to move only on the train tracks travels towards City B. The
y always travels at 60 meters/second, and any time it hits a train, it instantaneously reverses its direction and travels at the same speed. At the moment the
trains collide, what is the total distance that the y will have traveled? Assume each train is a point
and that the trains travel at their same respective velocities before and after collisions with the y
