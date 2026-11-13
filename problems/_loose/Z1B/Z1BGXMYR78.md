---
tag: Z1BGXMYR78
kind: problem
type: answer
answer: STEAMSHIP
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the transmission of messages by telegraph, each letter of the Russian alphabet (E and Yo are identified) is represented as a five-digit combination of zeros and ones, corresponding to the binary representation of the number of the given letter in the alphabet (letter numbering starts from zero). For example, the letter A is represented as 00000, the letter B as 00001, the letter Ch as 10111, and the letter Ya as 11111. The transmission of a five-digit combination is carried out over a cable containing five wires. Each binary digit is transmitted over a separate wire. Upon receiving the message, Cryptosha mixed up the wires, so instead of the transmitted word, a set of letters ЭАВЩоЩИ was received. Find the transmitted word.
