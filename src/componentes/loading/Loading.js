import { useLoading, Puff } from '@agney/react-loading';
import './Loading.css';

export const Loading = () => {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="50" />
      });

      return (
          <>
             {
                 <section {...containerProps} className="loading">
                    {indicatorEl} {/* renders only while loading */}
                </section>
            }
          </>
      )
}