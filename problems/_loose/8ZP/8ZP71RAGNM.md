---
tag: 8ZP71RAGNM
kind: problem
type: answer
answer: "38"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Xiao Cong is playing a Three Kingdoms card collection game, which features Cao Cao, Liu Bei, and Sun Quan as three types of warrior cards. Each type of warrior card has three star ratings: one-star, two-star, and three-star. Three cards of the same name and a lower star rating can be combined into one card of the same name but one star rating higher. One card of a higher star rating can be decomposed into one card each of the other two types, one star rating lower (for example: three one-star Cao Cao cards can be combined into one two-star Cao Cao card, and one three-star Cao Cao card can be decomposed into one two-star Sun Quan card and one two-star Liu Bei card). It is known that the only cards Xiao Cong can purchase are one-star cards, with the warriors being random. Therefore, Xiao Cong must buy at least $ $ cards at once to ensure that he can obtain three different three-star cards through synthesis or decomposition.
