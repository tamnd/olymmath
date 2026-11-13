---
tag: F3R1TJZYED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3274819
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1617
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2024
    source: hf-ai-mo-aops
    label: 2024 China Team Selection Test
---
For coprime positive integers $a,b$ ,denote $(a^{-1}\bmod{b})$ by the only integer $0\leq m<b$ such that $am\equiv 1\pmod{b}$ (1)Prove that for pairwise coprime integers $a,b,c$ , $1<a<b<c$ ,we have$$(a^{-1}\bmod{b})+(b^{-1}\bmod{c})+(c^{-1}\bmod{a})>\sqrt a.$$
(2)Prove that for any positive integer $M$ ,there exists pairwise coprime integers $a,b,c$ , $M<a<b<c$ such that
$$(a^{-1}\bmod{b})+(b^{-1}\bmod{c})+(c^{-1}\bmod{a})< 100\sqrt a.$$
