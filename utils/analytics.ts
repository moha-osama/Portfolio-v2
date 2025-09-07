const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  const gtagFn = (window as any).gtag;
  if (gtagFn) {
    gtagFn("event", eventName, params);
  }
};

export default trackEvent;
