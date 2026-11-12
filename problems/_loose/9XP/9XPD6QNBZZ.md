---
tag: 9XPD6QNBZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557379
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
---
Let $n\geq 2$ be an integer and denote $S = \{1,2,\ldots,n^2\}$ . For a function $f: S \to S$ we denote Im $f = \{b\in S: \exists a\in S, f(a) = b\}$ , Fix $f = \{x \in S: f(x) = x\}$ and $f^{-1}(k) = \{a\in S: f(a) = k\}$ . Find all possible values of $|$ Im $f|$ + $|$ Fix $f|$ + $\max_{k\in S} |f^{-1}(k)|$ .
