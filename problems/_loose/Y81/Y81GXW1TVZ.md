---
tag: Y81GXW1TVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a word $w$ consisting of $n$ lowercase letters, an *edit* is specified by a pair $(i,c)$ where $i\in \{1,\ldots, n\}$ and $c$ is a lowercase letter, and transforms $w$ by replacing its $i^{\text{th}}$ letter with $c$. It is possible that $c$ is the same as the letter it replaced.

How many sequences of six edits transform $\verb|frog|$ into $\verb|goat|$? Note that on the word $\verb|abcd|$, the edits $(1,\verb|a|)$ and $(2,\verb|b|)$ are considered distinct, even though both result in the word $\verb|abcd|$.
