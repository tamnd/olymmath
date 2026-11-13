---
tag: 9G2KJQX0M7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2835273
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan TST Round 3
---
Let $\mathcal{X}$ be the collection of all non-empty subsets (not necessarily finite) of the positive integer set $\mathbb{N}$ . Determine all functions $f: \mathcal{X} \to \mathbb{R}^+$ satisfying the following properties:

(i) For all $S$ , $T \in \mathcal{X}$ with $S\subseteq T$ , there holds $f(T) \le f(S)$ .
(ii) For all $S$ , $T \in \mathcal{X}$ , there hold
$$f(S) + f(T) \le f(S + T), f(S)f(T) = f(S\cdot T), $$
where $S + T = \{s + t\mid s\in S, t\in T\}$ and $S \cdot T = \{s\cdot t\mid s\in S, t\in T\}$ .

*Proposed by Li4, Untro368, and Ming Hsiao.*
