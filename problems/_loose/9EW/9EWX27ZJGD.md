---
tag: 9EWX27ZJGD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have $14$ coins, dated $1901$ through $1914$. Seven of these coins are real and weigh $1.000$ ounce each. The other seven are counterfeit and weigh $0.999$ ounces each. You do not know which coins are real or counterfeit. You also cannot tell which coins are real by look or feel.
Fortunately for you, Zoltar the Fortune-Weighing Robot is capable of making very precise measurements. You may place any number of coins in each of Zoltar's two hands and Zoltar will do the following:

- If the weights in each hand are equal, Zoltar tells you so and returns all of the coins.

-  If the weight in one hand is heavier than the weight in the other, then Zoltar takes one coin, at random, from the heavier hand as tribute. Then Zoltar tells you which hand was heavier, and returns the remaining coins to you.

Your objective is to identify a single real coin that Zoltar has not taken as tribute. Is there a strategy that guarantees this? If so, then describe the strategy and why it works. If not, then prove that no such strategy exists.
