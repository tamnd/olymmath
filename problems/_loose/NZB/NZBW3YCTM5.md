---
tag: NZBW3YCTM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055661
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19273
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
The *equatorial algebra* is defined as the real numbers equipped with the three binary operations $\natural$ , $\sharp$ , $\flat$ such that for all $x, y\in \mathbb{R}$ , we have $$x\mathbin\natural y = x + y, x\mathbin\sharp y = \max\{x, y\}, x\mathbin\flat y = \min\{x, y\}.$$
An *equatorial expression* over three real variables $x$ , $y$ , $z$ , along with the *complexity* of such expression, is defined recursively by the following:

- $x$ , $y$ , and $z$ are equatorial expressions of complexity 0;
- when $P$ and $Q$ are equatorial expressions with complexity $p$ and $q$ respectively, all of $P\mathbin\natural Q$ , $P\mathbin\sharp Q$ , $P\mathbin\flat Q$ are equatorial expressions with complexity $1+p+q$ .

Compute the number of distinct functions $f: \mathbb{R}^3\rightarrow \mathbb{R}$ that can be expressed as equatorial expressions of complexity at most 3.

*Proposed by Yannick Yao*
