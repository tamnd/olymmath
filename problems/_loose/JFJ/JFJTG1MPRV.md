---
tag: JFJTG1MPRV
kind: problem
type: answer
answer: "754"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Huanhuan, Yingying, and Nini have a total of 2712 cards in their hands, and there are still some cards on the table. They performed the following operations:
First time: Huanhuan took 1 card from each of Yingying and Nini;
Second time: Nini took 2 cards from the table, and then made the person with fewer cards among Huanhuan and Yingying take 1 card from the person with more cards;
Third time: Yingying took 4 cards from the table, and if the number of cards in her hand was even, she would give half of her cards to the person with fewer cards among Huanhuan and Nini; if it was odd, the game would end.
We call the above three operations "one round of operations". If they successfully completed 50 rounds of operations without the game ending, and at this point the number of cards they have in their hands, in the order of Nini, Huanhuan, and Yingying, forms an arithmetic sequence. How many cards did Huanhuan originally have?
