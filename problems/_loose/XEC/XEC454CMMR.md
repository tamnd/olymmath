---
tag: XEC454CMMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Person A and Person B each hold a die with $26^{5^{2019}}$ faces. A first fills the $26^{5^{2019}}$ faces of the die with $26^{5^{2019}}$ positive integers (which can be the same) whose sum is $27^{5^{2019}}$. Then, B observes A's die and fills their own die (with the same requirement that the numbers on each face are positive integers and their sum is $27^{5^{2019}}$). After B finishes filling, the two play a game with the following rules: both throw their dice at the same time, and the one who rolls a higher number wins; if they roll the same number, they continue to roll the dice until a winner is determined. It is assumed that each face of the die has an equal probability of landing face up. Question: Regardless of how A fills the die, can B always make a die that is better (i.e., has a higher probability of winning) than A's die?
