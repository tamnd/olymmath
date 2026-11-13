---
tag: GBZZ1C44E0
kind: problem
type: answer
answer: abba
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A palindrome is a number whose decimal representation does not change if the order of the digits is reversed. For example, 3773 is a palindrome. A four-digit number $\overline{\mathrm{abcd}}$ is said to be balanced if $\mathrm{a}+\mathrm{b}=\mathrm{c}+\mathrm{d}$ (for example, 2736 is balanced). Determine all four-digit balanced numbers that are the sum of two four-digit palindromes.

Note: a palindrome cannot start with a zero. For example, 0770 is not a palindrome.
