---
tag: K7GN57KXYA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2120600
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19488
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Taiwan TST Round 2
---
A finite set $K$ consists of at least 3 distinct positive integers. Suppose that $K$ can be partitioned into two nonempty subsets $A,B\in K$ such that $ab+1$ is always a perfect square whenever $a\in A$ and $b\in B$ . Prove that
$$\max_{k\in K}k\geq \left\lfloor (2+\sqrt{3})^{\min\{|A|,|B|\}-1}\right\rfloor+1,$$where $|X|$ stands for the cartinality of the set $X$ , and for $x\in \mathbb{R}$ , $\lfloor x\rfloor$ is the greatest integer that does not exceed $x$ .
