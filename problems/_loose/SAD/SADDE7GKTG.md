---
tag: SADDE7GKTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460012
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8424
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
You are playing a game in which you have $3$ envelopes, each containing a uniformly random amount of money between $0$ and $1000$ dollars. (That is, for any real $0 \leq a < b \leq 1000$ , the probability that the amount of money in a given envelope is between $a$ and $b$ is $\frac{b-a}{1000}$ .) At any step, you take an envelope and look at its contents. You may choose either to keep the envelope, at which point you finish, or discard it and repeat the process with one less envelope. If you play to optimize your expected winnings, your expected winnings will be $E$ . What is $\lfloor E\rfloor,$ the greatest integer less than or equal to $E$ ?

*Author: Alex Zhu*
