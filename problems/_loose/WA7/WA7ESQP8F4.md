---
tag: WA7ESQP8F4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2834871
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253201
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
Let $n,s,t$ be three positive integers, and let $A_1,\ldots, A_s, B_1,\ldots, B_t$ be non-necessarily distinct subsets of $\{1,2,\ldots,n\}$ . For any subset $S$ of $\{1,\ldots,n\}$ , define $f(S)$ to be the number of $i\in\{1,\ldots,s\}$ with $S\subseteq A_i$ and $g(S)$ to be the number of $j\in\{1,\ldots,t\}$ with $S\subseteq B_j$ . Assume that for any $1\leq x<y\leq n$ , we have $f(\{x,y\})=g(\{x,y\})$ . Show that if $t<n$ , then there exists some $1\leq x\leq n$ so that $f(\{x\})\geq g(\{x\})$ .

*Proposed by usjl*
