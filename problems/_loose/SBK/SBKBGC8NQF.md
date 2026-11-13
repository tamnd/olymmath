---
tag: SBKBGC8NQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Senators Sernie Banders and Cedric "Ced" Truz of OMOrica are running for the office of Price Dent. The election works as follows: There are $66$ states, each composed of many adults and $2017$ children, with only the latter eligible to vote. On election day, the children each cast their vote with equal probability to Banders or Truz. A majority of votes in the state towards a candidate means they "win" the state, and the candidate with the majority of won states becomes the new Price Dent. Should both candidates win an equal number of states, then whoever had the most votes cast for him wins.

Let the probability that Banders and Truz have an unresolvable election, i.e., that they tie on both the state count and the popular vote, be $\frac{p}{q}$ in lowest terms, and let $m, n$ be the remainders when $p, q$ , respectively, are divided by $1009$ . Find $m + n$ .

*Proposed by Ashwin Sah*
