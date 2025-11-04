import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('Discord webhook URL not configured');
      return NextResponse.json({ success: true, message: 'Webhook not configured' });
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: body.message || 'Quiz completed successfully!',
        embeds: [{
          title: '🎉 Quiz Completed!',
          description: 'A user has successfully completed the quiz!',
          color: 0x00ff00,
          timestamp: new Date().toISOString(),
        }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send webhook');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending webhook:', error);
    return NextResponse.json({ success: false, error: 'Failed to send webhook' }, { status: 500 });
  }
}
