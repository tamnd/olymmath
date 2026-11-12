---
tag: K562SMTJWZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table lie cards with numbers from 1 to 8: one card with the number 1, two with the number 2, three with the number 3, and so on. Petya and Vasya take one card each in turn and place them in one deck (Petya starts). After Vasya's turn, Petya can say "stop," and then all the unchosen cards are removed from the table, and Vasya and Petya take turns picking any cards from the resulting deck (Vasya starts) and laying them out on the table from left to right. If, after the last card is laid out on the table, the resulting number is the difference of squares of some integers, Vasya wins; otherwise, Petya wins. Can either player act in such a way as to ensure a win regardless of the other's actions?
