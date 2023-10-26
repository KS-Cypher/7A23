import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.IOException;

public class ButterflyImageAnimation extends JPanel {

    private int x = 0;
    private int y = 100;
    private int width = 600;
    private int height = 500;
    private int speed = 8;

    private BufferedImage wingsClosedImage;
    private BufferedImage wingsOpenImage;

    private boolean wingsOpen = false;

    public ButterflyImageAnimation() {
       
         Color bgColor = new Color(0xF8, 0xF8, 0xFA);
        setBackground(bgColor);
        try {
            wingsClosedImage = ImageIO.read(getClass().getResource("wings_closed.png"));
            wingsOpenImage = ImageIO.read(getClass().getResource("wings_open.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        Timer timer = new Timer(5000 / 30, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                update();
            }
        });
        timer.start();

        Thread renderThread = new Thread(new Runnable() {
            @Override
            public void run() {
                while (true) {
                    repaint();
                    try {
                        Thread.sleep(5000 / 30);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        renderThread.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        BufferedImage currentWingsImage = wingsClosedImage;
        if (wingsOpen) {
            currentWingsImage = wingsOpenImage;
        }

        g.drawImage(currentWingsImage, x, y, width, height, this);

        wingsOpen = !wingsOpen; // Toggle the wing state
    }

    private void update() {
        x += speed;
        if (x > getWidth()) {
            x = -width;
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Butterfly Image Animation");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new ButterflyImageAnimation());
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}
