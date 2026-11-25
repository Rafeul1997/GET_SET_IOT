const chapters = [
  {
    id: 1,
    title: "1. This Is Arduino",
    subtitle: "Microcontrollers, development boards, ATmega328 architecture, and the Arduino hardware family.",
    sections: [
      {
        heading: "What Is a Microcontroller?",
        body: `<p>The heart of an Arduino is a microcontroller—a small computer on a single chip containing a CPU, RAM, Flash memory, EEPROM, and Input/Output (I/O) pins. Unlike standard desktop computers, microcontrollers excel at <strong>physical computing</strong>: reading sensors and controlling motors, LEDs, and relays.</p>
        <ul>
          <li><strong>Digital Pins (D0–D13):</strong> Operate at 0V (LOW) or 5V (HIGH), supplying up to 40 mA per pin—enough for an LED, though motors require driver shields or transistors.</li>
          <li><strong>Analog Inputs (A0–A5):</strong> Measure variable voltages (0V to 5V) using high internal resistance so minimal current flows into the pin.</li>
          <li><strong>Power Supply:</strong> Accepts 7V–12V via the DC barrel jack (regulated down to 5V) or 5V directly via the USB port.</li>
        </ul>`
      },
      {
        heading: "ATmega328 Memory Architecture",
        body: `<table class="data-table">
          <thead><tr><th>Memory Type</th><th>Uno Capacity</th><th>Volatility</th><th>Primary Purpose</th></tr></thead>
          <tbody>
            <tr><td>Flash Memory</td><td>32 KB</td><td>Non-volatile</td><td>Stores compiled Arduino sketches (program instructions).</td></tr>
            <tr><td>SRAM</td><td>2 KB</td><td>Volatile</td><td>Working memory for variables during program execution.</td></tr>
            <tr><td>EEPROM</td><td>1 KB</td><td>Non-volatile</td><td>Long-term storage for settings/data retained after power off.</td></tr>
          </tbody>
        </table>`
      },
      {
        heading: "The Arduino Board Family",
        body: `<p>While the <strong>Arduino Uno R3</strong> is the standard learning board, the ecosystem includes specialized variants:</p>
        <ul>
          <li><strong>Arduino Leonardo:</strong> Uses a microcontroller with built-in USB communication, reducing cost.</li>
          <li><strong>Arduino Mega 2560:</strong> Offers 54 I/O pins, 128 KB+ Flash, and 8 KB RAM for large projects.</li>
          <li><strong>Arduino Due:</strong> Runs a 32-bit ARM processor at 84 MHz using <strong>3.3V</strong> logic (5V shields can damage it).</li>
          <li><strong>LilyPad & Micro:</strong> Compact boards designed for wearable textiles and breadboard embedding.</li>
        </ul>`
      }
    ],
    quiz: {
      question: "Which memory on the ATmega328 stores your uploaded Arduino sketch so it remains even after power is disconnected?",
      options: ["2 KB SRAM", "32 KB Flash Memory", "16 MHz Quartz Crystal", "UART Buffer"],
      answer: 1,
      explanation: "Flash memory (32 KB on the Uno) is non-volatile and stores your compiled program instructions."
    }
  },
  {
    id: 2,
    title: "2. Getting Started",
    subtitle: "Powering up, configuring the Arduino IDE, and uploading your first Blink sketch.",
    sections: [
      {
        heading: "Powering Up & Hardware Verification",
        body: `<p>Most new Arduino Uno boards ship pre-loaded with the <strong>Blink</strong> sketch. When connected via a Type-A to Type-B USB cable, the green <code>ON</code> LED illuminates and the built-in yellow LED marked <code>L</code> (wired to <strong>Digital Pin 13</strong>) flashes once per second.</p>`
      },
      {
        heading: "Uploading Your First Sketch",
        body: `<p>Before clicking <strong>Upload</strong> in the Arduino IDE, always verify two settings under the <strong>Tools</strong> menu:</p>
        <ul>
          <li><strong>Tools → Board:</strong> Select <code>Arduino/Genuino Uno</code>.</li>
          <li><strong>Tools → Port:</strong> Select your COM port on Windows (e.g., <code>COM10</code>) or <code>/dev/cu.usbmodem...</code> on macOS/Linux.</li>
        </ul>`,
        codeTitle: "Blink.ino (Modified 500ms Rate)",
        code: `void setup() {
  // Initialize digital pin 13 as an output
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);   // Turn LED on (5V)
  delay(500);               // Wait 500 milliseconds
  digitalWrite(13, LOW);    // Turn LED off (0V)
  delay(500);               // Wait 500 milliseconds
}`
      }
    ],
    quiz: {
      question: "Which digital pin is hardwired to the built-in 'L' LED on an Arduino Uno?",
      options: ["Pin 0 (RX)", "Pin 5", "Pin 13", "Pin A0"],
      answer: 2,
      explanation: "Digital pin 13 is connected to the onboard 'L' LED on the Arduino Uno."
    }
  },
  {
    id: 3,
    title: "3. C Language Basics",
    subtitle: "Compilation, setup() and loop() boilerplate, variables, arithmetic, and control loops.",
    sections: [
      {
        heading: "From C Code to Machine Code",
        body: `<p>When you click <strong>Verify</strong> or <strong>Upload</strong>, the Arduino IDE compiles human-readable C code into binary machine instructions and transfers them via the USB bootloader into Flash memory. Every Arduino sketch requires two mandatory functions:</p>
        <ul>
          <li><code>void setup()</code>: Runs <strong>once</strong> when the board powers up or resets.</li>
          <li><code>void loop()</code>: Runs <strong>repeatedly</strong> in an infinite cycle as long as the board has power.</li>
        </ul>`
      },
      {
        heading: "Variables, Serial Monitor & Control Structures",
        body: `<p>Using variables like <code>int ledPin = 13;</code> avoids hardcoding numbers across multiple lines. Use <code>const</code> for fixed pin numbers to save memory. You can inspect values on your computer using <code>Serial.begin(9600)</code> and <code>Serial.println()</code>.</p>`,
        codeTitle: "sketch_03_08.ino — Using a for Loop",
        code: `const int ledPin = 13;
int delayPeriod = 100;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Flash 20 times rapidly
  for (int i = 0; i < 20; i++) {
    digitalWrite(ledPin, HIGH);
    delay(delayPeriod);
    digitalWrite(ledPin, LOW);
    delay(delayPeriod);
  }
  delay(3000); // Pause 3 seconds
}`
      },
      {
        heading: "Comparison Operators in C",
        body: `<table class="data-table">
          <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><code>==</code></td><td>Equal to (do not confuse with <code>=</code> assignment)</td><td><code>if (count == 20)</code></td></tr>
            <tr><td><code>!=</code></td><td>Not equal to</td><td><code>if (ch != '\\0')</code></td></tr>
            <tr><td><code>&lt;</code> / <code>&gt;</code></td><td>Less than / Greater than</td><td><code>if (delayPeriod &gt; 3000)</code></td></tr>
            <tr><td><code>&lt;=</code> / <code>&gt;=</code></td><td>Less/Greater than or equal to</td><td><code>while (i &lt;= 10)</code></td></tr>
          </tbody>
        </table>`
      }
    ],
    quiz: {
      question: "What happens if you write if (x = 10) instead of if (x == 10) in C?",
      options: ["It checks if x is equal to 10", "It assigns 10 to x instead of comparing values", "It triggers a hardware reset", "It divides x by 10"],
      answer: 1,
      explanation: "A single '=' is the assignment operator; '==' is required for equality comparison."
    }
  },
  {
    id: 4,
    title: "4. Functions",
    subtitle: "Modularizing sketches with custom functions, parameters, variable scope, static variables, and data types.",
    sections: [
      {
        heading: "Encapsulation with Functions & Parameters",
        body: `<p>Breaking repetitive tasks into functions keeps <code>loop()</code> clean and readable. Functions can accept parameters and return values (or use <code>void</code> when returning nothing).</p>`,
        codeTitle: "sketch_04_02.ino — Parameterized Flash Function",
        code: `const int ledPin = 13;
const int delayPeriod = 250;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  flash(20, delayPeriod);
  delay(3000);
}

void flash(int numFlashes, int d) {
  for (int i = 0; i < numFlashes; i++) {
    digitalWrite(ledPin, HIGH);
    delay(d);
    digitalWrite(ledPin, LOW);
    delay(d);
  }
}`
      },
      {
        heading: "Global, Local, and static Variables",
        body: `<ul>
          <li><strong>Global Variables:</strong> Declared outside functions; accessible everywhere, though overuse hurts encapsulation.</li>
          <li><strong>Local Variables:</strong> Declared inside a function; created and destroyed each time the function executes.</li>
          <li><strong>static Variables:</strong> Retain their value between function calls while remaining scoped locally (e.g., <code>static int count = 0;</code> inside <code>loop()</code>).</li>
        </ul>`
      },
      {
        heading: "Core Arduino Data Types",
        body: `<table class="data-table">
          <thead><tr><th>Type</th><th>Size</th><th>Range / Notes</th></tr></thead>
          <tbody>
            <tr><td><code>boolean</code></td><td>1 byte</td><td><code>true</code> or <code>false</code> (logical operators: <code>&&</code>, <code>||</code>, <code>!</code>)</td></tr>
            <tr><td><code>byte</code></td><td>1 byte</td><td>0 to 255</td></tr>
            <tr><td><code>int</code></td><td>2 bytes</td><td>-32,768 to +32,767 (overflowing 32,767 wraps to -32,768)</td></tr>
            <tr><td><code>long</code></td><td>4 bytes</td><td>-2,147,483,648 to +2,147,483,647</td></tr>
            <tr><td><code>float</code></td><td>4 bytes</td><td>Floating-point decimals (use <code>9.0 / 5.0</code> to prevent integer truncation)</td></tr>
          </tbody>
        </table>`
      }
    ],
    quiz: {
      question: "Why would you declare a variable as 'static int count = 0;' inside loop()?",
      options: ["To prevent its value from changing", "To preserve its value across repeated executions of loop() without making it global", "To store it in EEPROM", "To convert it into a float"],
      answer: 1,
      explanation: "The static keyword initializes the local variable only once and retains its value between function calls."
    }
  },
  {
    id: 5,
    title: "5. Arrays and Strings",
    subtitle: "Zero-indexed arrays, null-terminated C character arrays, ASCII encoding, and the Morse Code Translator.",
    sections: [
      {
        heading: "Arrays & Memory Bounds",
        body: `<p>Arrays store ordered lists of values starting at <strong>index 0</strong>. C does not enforce array bounds checking—writing past the end of an array overwrites adjacent memory variables and crashes sketches.</p>`
      },
      {
        heading: "C Strings & ASCII",
        body: `<p>A C string is a <code>char</code> array terminated by a special null character <code>'\\0'</code> (ASCII 0). Because characters are stored as numeric ASCII codes (<code>'a'</code> = 97, <code>'A'</code> = 65, <code>'0'</code> = 48), subtracting <code>ch - 'a'</code> converts a letter directly into an array index (0–25).</p>`,
        codeTitle: "sketch_05_05.ino — Serial Morse Code Translator",
        code: `const int dotDelay = 200;
const int ledPin = 13;

char* letters[] = {
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",    // A-I
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",  // J-R
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."          // S-Z
};

char* numbers[] = {
  "-----", ".----", "..---", "...--", "....-",
  ".....", "-....", "--...", "---..", "----."
};

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  char ch;
  if (Serial.available() > 0) {
    ch = Serial.read();
    if (ch >= 'a' && ch <= 'z') {
      flashSequence(letters[ch - 'a']);
    } else if (ch >= 'A' && ch <= 'Z') {
      flashSequence(letters[ch - 'A']);
    } else if (ch >= '0' && ch <= '9') {
      flashSequence(numbers[ch - '0']);
    } else if (ch == ' ') {
      delay(dotDelay * 4);
    }
  }
}

void flashSequence(char* sequence) {
  int i = 0;
  while (sequence[i] != '\\0') {
    flashDotOrDash(sequence[i]);
    i++;
  }
  delay(dotDelay * 3);
}

void flashDotOrDash(char dotOrDash) {
  digitalWrite(ledPin, HIGH);
  if (dotOrDash == '.') {
    delay(dotDelay);
  } else {
    delay(dotDelay * 3);
  }
  digitalWrite(ledPin, LOW);
  delay(dotDelay);
}`
      }
    ],
    quiz: {
      question: "What special character marks the end of a C string literal in memory?",
      options: ["\\n (Newline)", "\\0 (Null character)", "EOF", "; (Semicolon)"],
      answer: 1,
      explanation: "C strings are terminated by the null character '\\0' (ASCII code 0)."
    }
  },
  {
    id: 6,
    title: "6. Input and Output",
    subtitle: "Digital I/O, floating inputs, internal pull-up resistors, switch debouncing, PWM, and analogRead().",
    sections: [
      {
        heading: "Digital Inputs & Internal Pull-Up Resistors",
        body: `<p>An unconnected digital input pin is <strong>floating</strong> and picks up stray electrical noise. Enabling the ATmega328's internal pull-up resistor via <code>pinMode(pin, INPUT_PULLUP)</code> holds the pin at 5V (HIGH) until a switch connects it to GND (LOW).</p>`
      },
      {
        heading: "Switch Debouncing",
        body: `<p>Mechanical pushbuttons bounce open and closed for several milliseconds when pressed. You can debounce inputs using a brief <code>delay()</code> or non-blocking libraries like <code>Bounce2.h</code>.</p>`
      },
      {
        heading: "PWM Analog Outputs & 10-Bit Analog Inputs",
        body: `<ul>
          <li><strong>PWM (Pulse Width Modulation):</strong> Pins marked with <code>~</code> (3, 5, 6, 9, 10, 11) simulate analog voltage using <code>analogWrite(pin, 0..255)</code> by rapidly varying pulse duty cycles.</li>
          <li><strong>Analog Inputs (A0–A5):</strong> <code>analogRead(pin)</code> returns a 10-bit integer from <code>0</code> (0V) to <code>1023</code> (5V). Divide by <code>204.6</code> to convert to volts.</li>
        </ul>`,
        codeTitle: "sketch_06_09.ino — Digital Voltmeter on Pin A0",
        code: `const int analogPin = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int reading = analogRead(analogPin);
  float voltage = reading / 204.6;
  Serial.print("Reading=");
  Serial.print(reading);
  Serial.print("\\t\\tVolts=");
  Serial.println(voltage);
  delay(500);
}`
      }
    ],
    quiz: {
      question: "What range of values does analogRead() return on an Arduino Uno?",
      options: ["0 to 255", "0 to 1023", "-32768 to 32767", "0 to 5"],
      answer: 1,
      explanation: "The Uno's 10-bit ADC maps 0V–5V to integer values from 0 to 1023."
    }
  },
  {
    id: 7,
    title: "7. The Standard Arduino Library",
    subtitle: "Pseudo-random numbers, math helpers, bit manipulation, tone generation, shiftOut(), and hardware interrupts.",
    sections: [
      {
        heading: "Random Numbers & Math Utilities",
        body: `<p>Because microcontrollers are deterministic, <code>random(min, max)</code> generates repeatable pseudo-random sequences unless seeded with noise from a floating analog pin: <code>randomSeed(analogRead(0));</code>.</p>
        <ul>
          <li><code>map(val, fromLow, fromHigh, toLow, toHigh)</code>: Re-scales sensor ranges (e.g., 0–1023 to 0–5000).</li>
          <li><code>constrain(x, min, max)</code>: Clamps a variable within safe boundaries.</li>
          <li><code>abs()</code>, <code>min()</code>, <code>max()</code>, <code>pow()</code>, <code>sqrt()</code>: Built-in math helpers.</li>
        </ul>`
      },
      {
        heading: "Bit Manipulation, Tones & Hardware Interrupts",
        body: `<p>Use <code>bitRead(x, bit)</code> and <code>bitWrite(x, bit, val)</code> to pack flags into single bytes, <code>tone(pin, freqHz)</code> for square-wave audio, and <code>attachInterrupt()</code> on pins <strong>D2 (Interrupt 0)</strong> and <strong>D3 (Interrupt 1)</strong> to react immediately to external events.</p>`,
        codeTitle: "sketch_07_04.ino — Hardware Interrupt on Pin D2",
        code: `const int interruptPin = 2;
const int ledPin = 13;
volatile int period = 500;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(0, goFast, FALLING);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(period);
  digitalWrite(ledPin, LOW);
  delay(period);
}

void goFast() {
  period = 100;
}`
      }
    ],
    quiz: {
      question: "Which two pins on the Arduino Uno support external hardware interrupts via attachInterrupt()?",
      options: ["D0 and D1", "D2 and D3", "D9 and D10", "A0 and A1"],
      answer: 1,
      explanation: "On the Arduino Uno, digital pins D2 (interrupt 0) and D3 (interrupt 1) support external interrupts."
    }
  },
  {
    id: 8,
    title: "8. Data Storage",
    subtitle: "Saving RAM with PROGMEM and F(), persisting data in EEPROM, and range compression.",
    sections: [
      {
        heading: "Storing Constants in Flash (PROGMEM & F())",
        body: `<p>With only 2 KB of SRAM on an Uno, large lookup tables or text prompts can exhaust memory. Enclose serial strings in <code>F("Hello World")</code> or use <code>#include &lt;avr/pgmspace.h&gt;</code> with <code>PROGMEM</code> to keep constant data in the 32 KB Flash memory.</p>`
      },
      {
        heading: "Non-Volatile EEPROM & Wear Limits",
        body: `<p>The 1 KB EEPROM retains data across power cycles (rated for ~100,000 write cycles per byte). While <code>EEPROM.write(addr, byte)</code> writes 1 byte at a time, <code>&lt;avr/eeprom.h&gt;</code> lets you save multi-byte <code>int</code>, <code>float</code>, and string blocks directly.</p>`,
        codeTitle: "sketch_08_04.ino — Storing a 4-Byte Float in EEPROM",
        code: `#include <avr/eeprom.h>

void setup() {
  Serial.begin(9600);
  float f1 = 1.23;
  eeprom_write_block(&f1, 0, 4);

  float f2 = 0;
  eeprom_read_block(&f2, 0, 4);
  Serial.println(f2);
}

void loop() {}`
      }
    ],
    quiz: {
      question: "Approximately how many write cycles is an Arduino EEPROM memory cell rated for before becoming unreliable?",
      options: ["100 cycles", "1,000 cycles", "100,000 cycles", "Unlimited cycles"],
      answer: 2,
      explanation: "EEPROM cells have a lifespan of roughly 100,000 write/erase cycles, so avoid writing inside fast loops."
    }
  },
  {
    id: 9,
    title: "9. Displays",
    subtitle: "Driving HD44780 alphanumeric LCD shields and I2C SSD1306 128x64 OLED graphic displays.",
    sections: [
      {
        heading: "Alphanumeric LCD Shields (LiquidCrystal)",
        body: `<p>16x2 character LCD shields based on the HD44780 controller use the built-in <code>&lt;LiquidCrystal.h&gt;</code> library with functions like <code>lcd.begin(16, 2)</code>, <code>lcd.setCursor(col, row)</code>, <code>lcd.print()</code>, and <code>lcd.clear()</code>.</p>`
      },
      {
        heading: "I2C OLED Graphic Displays (128x64)",
        body: `<p>Monochrome SSD1306 OLED screens connect over the two-wire <strong>I2C bus</strong> (<code>SDA</code> and <code>SCL</code>, plus VCC and GND) using the <code>Adafruit_GFX</code> and <code>Adafruit_SSD1306</code> libraries. Always call <code>display.display()</code> after drawing primitives to push the buffer to the screen.</p>`,
        codeTitle: "sketch_09_02.ino — I2C OLED Counter",
        code: `#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 display(4);

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3c);
  display.setTextSize(4);
  display.setTextColor(WHITE);
}

void loop() {
  static int count = 0;
  display.clearDisplay();
  display.drawRoundRect(0, 0, 127, 63, 8, WHITE);
  display.setCursor(20, 20);
  display.print(count);
  display.display();
  count = (count + 1) % 10000;
  delay(1000);
}`
      }
    ],
    quiz: {