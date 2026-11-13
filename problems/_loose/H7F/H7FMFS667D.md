---
tag: H7FMFS667D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541574
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78616
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267463
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
Let $p=2017$ be a prime. Suppose that the number of ways to place $p$ indistinguishable red marbles, $p$ indistinguishable green marbles, and $p$ indistinguishable blue marbles around a circle such that no red marble is next to a green marble and no blue marble is next to a blue marble is $N$ . (Rotations and reflections of the same configuration are considered distinct.) Given that $N=p^m\cdot n$ , where $m$ is a nonnegative integer and $n$ is not divisible by $p$ , and $r$ is the remainder of $n$ when divided by $p$ , compute $pm+r$ .

*Proposed by Yannick Yao*
