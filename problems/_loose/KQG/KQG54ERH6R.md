---
tag: KQG54ERH6R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516635
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10057
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Pairwise distinct points $P_1,P_2,\ldots, P_{16}$ lie on the perimeter of a square with side length $4$ centered at $O$ such that $\lvert P_iP_{i+1} \rvert = 1$ for $i=1,2,\ldots, 16$ . (We take $P_{17}$ to be the point $P_1$ .) We construct points $Q_1,Q_2,\ldots,Q_{16}$ as follows: for each $i$ , a fair coin is flipped. If it lands heads, we define $Q_i$ to be $P_i$ ; otherwise, we define $Q_i$ to be the reflection of $P_i$ over $O$ . (So, it is possible for some of the $Q_i$ to coincide.) Let $D$ be the length of the vector $\overrightarrow{OQ_1} + \overrightarrow{OQ_2} + \cdots + \overrightarrow{OQ_{16}}$ . Compute the expected value of $D^2$ .

*Ray Li*
