---
tag: 2HQYN4KT46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3158653
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27703
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *tile* $T$ is a union of finitely many pairwise disjoint arcs of a unit circle $K$ . The *size* of $T$ ,
denoted by $|T|$ , is the sum of the lengths of the arcs $T$ consists of, divided by $2\pi$ . A *copy* of $T$ is
a tile $T'$ obtained by rotating $T$ about the centre of $K$ through some angle. Given a positive
real number $\varepsilon < 1$ , does there exist an infinite sequence of tiles $T_1,T_2,\ldots,T_n,\ldots$ satisfying the following two conditions simultaneously:
1) $|T_n| > 1 - \varepsilon$ for all $n$ ;
2) The union of all $T_n'$ (as $n$ runs through the positive integers) is a proper subset of $K$ for any choice of the copies $T_1'$ , $T_2'$ , $\ldots$ , $T_n', \ldots$ ?
