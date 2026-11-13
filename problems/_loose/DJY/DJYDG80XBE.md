---
tag: DJYDG80XBE
kind: problem
type: answer
answer: "1024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a room there is a series of bulbs on a wall and corresponding switches on the opposite wall. If you put on the $n$ -th switch the $n$ -th bulb will light up. There is a group of men who are operating the switches according to the following rule: they go in one by one and starts flipping the switches starting from the first switch until he has to turn on a bulb; as soon as he turns a bulb on, he leaves the room. For example the first person goes in, turns the first switch on and leaves. Then the second man goes in, seeing that the first switch on turns it off and then lights the second bulb. Then the third person goes in, finds the first switch off and turns it on and leaves the room. Then the fourth person enters and switches off the first and second bulbs and switches on the third. The process continues in this way. Finally we find out that first 10 bulbs are off and the 11 -th bulb is on. Then how many people were involved in the entire process?
