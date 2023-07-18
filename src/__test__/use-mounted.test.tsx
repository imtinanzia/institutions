import { renderHook } from '@testing-library/react-hooks';
import { useMounted } from '../hooks';

describe('useMounted', () => {
  it('should return a ref object with initial value false', () => {
    const { result } = renderHook(() => useMounted());

    expect(result.current.current).toBe(false);
  });

  it('should update the ref value to true after component unmounts', () => {
    const { result, unmount } = renderHook(() => useMounted());

    expect(result.current.current).toBe(false);

    unmount();

    expect(result.current.current).toBe(true);
  });
});
