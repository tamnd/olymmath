---
tag: 560K3KWDNK
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the largest positive integer $n$ for which there exist pairwise different sets $\mathbb{S}_1 , ..., \mathbb{S}_n$ with the following properties:
$1$) $|\mathbb{S}_i \cup \mathbb{S}_j | \leq 2004$ for any two indices $1 \leq i, j\leq n$, and
$2$) $\mathbb{S}_i \cup \mathbb{S}_j \cup \mathbb{S}_k = \{ 1,2,...,2008 \}$ for any $1 \leq i < j < k \leq n$
*Proposed by Ivan Matic*
