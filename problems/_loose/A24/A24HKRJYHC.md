---
tag: A24HKRJYHC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One hundred white cards are numbered: one card with the number 1 on both sides, one card with the number 2 on both sides, and so on, up to a card with the number 100 on both sides. The cards are placed in a stack, with the card numbered 1 on top.

The order of the cards is changed in steps as follows: in the $1^{\mathrm{st}}$ step, the top card is flipped and placed back on the stack (of course, nothing changes here), in the $2^{\mathrm{nd}}$ step, the top 2 cards are taken, flipped, and placed back on the stack, ..., in the $i^{\mathrm{th}}$ step, the top $i$ cards are taken, flipped as a group, and placed back on the stack, ..., in the $100^{\mathrm{th}}$ step, all 100 cards are taken and flipped as a group. In the $101^{\mathrm{st}}$ step, only the top card is flipped again, in the $102^{\mathrm{nd}}$ step, the top 2 cards, and so on. Prove that if we continue this process, the cards will eventually return to their original positions after a certain number of steps.
