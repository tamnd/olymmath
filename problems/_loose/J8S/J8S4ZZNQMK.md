---
tag: J8S4ZZNQMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78526
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $V_0 = \varnothing$ be the empty set and recursively define $V_{n+1}$ to be the set of all $2^{|V_n|}$ subsets of $V_n$ for each $n=0,1,\dots$ . For example $$
V_2 = \left\{ \varnothing, \left\{ \varnothing \right\} \right\}
\text{and} V_3
=
\left\{
\varnothing,
\left\{ \varnothing \right\},
\left\{ \left\{ \varnothing \right\} \right\},
\left\{ \varnothing, \left\{ \varnothing \right\} \right\}
\right\}.
$$ A set $x \in V_5$ is called *transitive* if each element of $x$ is a subset of $x$ . How many such transitive sets are there?

*Proposed by Evan Chen*
