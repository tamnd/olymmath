---
tag: 5VA0WTTWPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261597
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A research facility has $60$ rooms, numbered $1, 2, \dots 60$, arranged in a circle. The entrance is in room $1$ and the exit is in room $60$, and there are no other ways in and out of the facility. Each room, except for room $60$, has a teleporter equipped with an integer instruction $1 \leq i < 60$ such that it teleports a passenger exactly $i$ rooms clockwise.

On Monday, a researcher generates a random permutation of $1, 2, \dots, 60$ such that $1$ is the first integer in the permutation and $60$ is the last. Then, she configures the teleporters in the facility such that the rooms will be visited in the order of the permutation.

On Tuesday, however, a cyber criminal hacks into a randomly chosen teleporter, and he reconfigures its instruction by choosing a random integer $1 \leq j' < 60$ such that the hacked teleporter now teleports a passenger exactly $j'$ rooms clockwise (note that it is possible, albeit unlikely, that the hacked teleporter's instruction remains unchanged from Monday). This is a problem, since it is possible for the researcher, if she were to enter the facility, to be trapped in an endless \say{cycle} of rooms.

The probability that the researcher will be unable to exit the facility after entering in room $1$ can be written as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
