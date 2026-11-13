---
tag: F29NHB89ZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h429008
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6617
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Iran MO (3rd Round)
---
Suppose that $S\subseteq \mathbb Z$ has the following property: if $a,b\in S$ , then $a+b\in S$ . Further, we know that $S$ has at least one negative element and one positive element. Is the following statement true?
There exists an integer $d$ such that for every $x\in \mathbb Z$ , $x\in S$ if and only if $d|x$ .
*proposed by Mahyar Sefidgaran*
